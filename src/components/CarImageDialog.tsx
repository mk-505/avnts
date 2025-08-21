
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { X, Calendar, Clock, DollarSign } from "lucide-react";

interface CarImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  car: {
    id: number;
    name: string;
    make: string;
    model: string;
    year: number;
    category: string;
    image: string;
    description: string;
    daily?: number;
    weekly?: number;
    monthly?: number;
  };
  additionalImages: string[];
}

const CarImageDialog = ({ isOpen, onClose, car, additionalImages }: CarImageDialogProps) => {
  // Combine main image with additional images for the carousel
  const allImages = [car.image, ...additionalImages];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Car Images */}
          <div>
            <DialogTitle className="text-xl font-serif font-bold mb-4">
              {car.name} ({car.year})
            </DialogTitle>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-2">
                {car.category}
              </span>
              <p className="text-gray-600 text-sm">{car.description}</p>
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${car.name} - image ${index + 1}`}
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative inline-flex static left-0 translate-y-0" />
                <CarouselNext className="relative inline-flex static right-0 translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Car Details and Pricing */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Vehicle Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Make:</span>
                  <span className="font-medium">{car.make}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Model:</span>
                  <span className="font-medium">{car.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year:</span>
                  <span className="font-medium">{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{car.category}</span>
                </div>
              </div>
            </div>

            {/* Pricing Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Rental Pricing</h3>
              <div className="space-y-4">
                {car.daily && (
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Daily Rate</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">${car.daily}</span>
                    </div>
                  </div>
                )}

                {car.weekly && (
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Weekly Rate</span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">${car.weekly}</span>
                    </div>
                  </div>
                )}

                {car.monthly && (
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">Monthly Rate</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">${car.monthly.toLocaleString()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
                onClick={() => {
                  // You can add booking logic here
                  window.location.href = '/contact';
                }}
              >
                Book This Vehicle
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarImageDialog;
