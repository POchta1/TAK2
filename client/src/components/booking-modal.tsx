import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { formatPhoneNumber } from "@/lib/utils";

const bookingSchema = z.object({
  date: z.string().min(1, "Выберите дату"),
  time: z.string().min(1, "Выберите время"),
  phone: z.string().min(1, "Введите номер телефона")
});

type BookingData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { toast } = useToast();
  const [selectedTime, setSelectedTime] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const timeSlots = ["15:00", "16:30", "18:00", "19:30", "11:00", "13:00"];

  const form = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: "",
      time: "",
      phone: ""
    }
  });

  const bookingMutation = useMutation({
    mutationFn: (data: BookingData) => apiRequest("POST", "/api/booking", data),
    onSuccess: () => {
      toast({
        title: "Заявка отправлена!",
        description: "Я свяжусь с вами в ближайшее время для подтверждения."
      });
      form.reset();
      setSelectedTime("");
      setPhoneValue("");
      onClose();
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: BookingData) => {
    bookingMutation.mutate(data);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    form.setValue("time", time);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneValue(formatted);
    form.setValue("phone", formatted);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Запись на урок</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Выберите дату</label>
            <Input 
              type="date"
              min={today}
              {...form.register("date")}
              className={form.formState.errors.date ? "border-red-500" : ""}
            />
            {form.formState.errors.date && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.date.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Выберите время</label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                >
                  {time}
                </button>
              ))}
            </div>
            {form.formState.errors.time && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.time.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Ваш номер телефона</label>
            <Input 
              type="tel"
              value={phoneValue}
              onChange={handlePhoneChange}
              placeholder="+7 (___) ___-__-__"
              className={form.formState.errors.phone ? "border-red-500" : ""}
            />
            {form.formState.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full btn-primary" 
            disabled={bookingMutation.isPending}
          >
            {bookingMutation.isPending ? "Подтверждение..." : "Подтвердить запись"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
