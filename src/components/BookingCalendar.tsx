
import React, { useState } from "react";
import { format, addDays, addHours, startOfDay, isBefore, setHours, setMinutes } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, BookOpen, CalendarCheck, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

// Mock available times for demonstration
// In a real implementation, these would come from Microsoft Calendar API
const generateTimeSlots = (date: Date) => {
  const slots = [];
  const day = startOfDay(date);
  
  // Business hours (9 AM to 5 PM)
  for (let i = 9; i <= 16; i++) {
    // Create slots at the hour and half-hour
    const hourSlot = setHours(setMinutes(day, 0), i);
    const halfHourSlot = setHours(setMinutes(day, 30), i);
    
    // Add slots if they're in the future
    if (isBefore(new Date(), hourSlot)) {
      slots.push(hourSlot);
    }
    if (isBefore(new Date(), halfHourSlot)) {
      slots.push(halfHourSlot);
    }
  }
  
  // Randomly mark some slots as booked
  return slots.map(slot => ({
    time: slot,
    available: Math.random() > 0.3 // 70% of slots are available
  }));
};

interface BookingCalendarProps {
  buttonLabel?: string;
  buttonClassName?: string;
}

const BookingCalendar = ({ 
  buttonLabel = "Book a Consultation", 
  buttonClassName 
}: BookingCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlots, setTimeSlots] = useState<Array<{time: Date, available: boolean}>>([]);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const { toast } = useToast();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setTimeSlots(generateTimeSlots(selectedDate));
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time: Date) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (!selectedTime) return;
    
    setIsBooking(true);
    
    // Simulate API call to Microsoft Calendar
    setTimeout(() => {
      setIsBooking(false);
      setIsCalendarOpen(false);
      setDate(undefined);
      setSelectedTime(null);
      
      toast({
        title: "Consultation Booked",
        description: `Your consultation is scheduled for ${format(selectedTime, "EEEE, MMMM d, yyyy 'at' h:mm a")}`,
      });
    }, 1500);
  };

  const disablePastDates = (date: Date) => {
    return isBefore(date, startOfDay(new Date()));
  };

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button 
          className={cn("gap-2", buttonClassName)}
          variant="default"
        >
          <CalendarIcon size={18} />
          {buttonLabel}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white" align="start">
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium">Schedule a Consultation</h3>
          <p className="text-sm text-gray-500 mt-1">
            Select a date and time for your consultation
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="p-3 border-r">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={disablePastDates}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </div>
          
          <div className="p-3 flex flex-col min-w-[200px]">
            {date ? (
              <>
                <h4 className="text-sm font-medium mb-3">
                  Available Times for {format(date, "MMMM d, yyyy")}
                </h4>
                
                <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
                  {timeSlots.length === 0 ? (
                    <p className="text-sm text-gray-500">Loading available times...</p>
                  ) : timeSlots.length > 0 ? (
                    timeSlots.map((slot, i) => (
                      <Button
                        key={i}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        className={cn(
                          "justify-start text-left",
                          !slot.available && "opacity-50 cursor-not-allowed"
                        )}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                      >
                        {format(slot.time, "h:mm a")}
                        {!slot.available && " (Unavailable)"}
                      </Button>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No available times for this date</p>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-gray-500">
                  Please select a date to view available times
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t bg-gray-50 flex justify-end">
          <Button
            variant="default"
            onClick={handleBookAppointment}
            disabled={!selectedTime || isBooking}
            className="gap-2"
          >
            {isBooking ? <Loader2 className="animate-spin" size={16} /> : <CalendarCheck size={16} />}
            {isBooking ? "Booking..." : "Confirm Booking"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default BookingCalendar;
