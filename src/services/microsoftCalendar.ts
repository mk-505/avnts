
import { format } from 'date-fns';

// This is a mock service that simulates Microsoft Calendar integration
// In a real implementation, you would use Microsoft Graph API

interface CalendarEvent {
  id: string;
  subject: string;
  start: Date;
  end: Date;
  location?: string;
  attendees?: string[];
}

// Mock function to get available times
export const getAvailableTimes = async (date: Date): Promise<Date[]> => {
  // In a real implementation, this would call Microsoft Graph API
  // to check the calendar for available slots
  
  console.log(`Fetching available times for ${format(date, 'yyyy-MM-dd')}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock data
  const availableTimes: Date[] = [];
  const baseDate = new Date(date);
  
  // Business hours 9 AM to 5 PM
  for (let hour = 9; hour < 17; hour++) {
    // Generate slots at the hour and half-hour
    const hourSlot = new Date(baseDate);
    hourSlot.setHours(hour, 0, 0);
    
    const halfHourSlot = new Date(baseDate);
    halfHourSlot.setHours(hour, 30, 0);
    
    // Randomly make some slots available
    if (Math.random() > 0.3) {
      availableTimes.push(hourSlot);
    }
    
    if (Math.random() > 0.3) {
      availableTimes.push(halfHourSlot);
    }
  }
  
  return availableTimes;
};

// Mock function to book an appointment
export const bookAppointment = async (
  startTime: Date,
  duration: number = 60, // minutes
  subject: string,
  attendeeEmail?: string
): Promise<CalendarEvent> => {
  // In a real implementation, this would call Microsoft Graph API
  // to create a new calendar event
  
  console.log(`Booking appointment: ${subject} at ${format(startTime, 'yyyy-MM-dd HH:mm')}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Calculate end time
  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + duration);
  
  // Return mock event data
  return {
    id: `event-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    subject,
    start: startTime,
    end: endTime,
    attendees: attendeeEmail ? [attendeeEmail] : []
  };
};

// For a real implementation, you would need OAuth authentication
export const authenticateWithMicrosoft = async (): Promise<boolean> => {
  // This would use Microsoft Identity Platform and OAuth 2.0
  console.log('Authenticating with Microsoft...');
  
  // Simulate authentication
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success
  return true;
};
