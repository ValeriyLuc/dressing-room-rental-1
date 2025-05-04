
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface GalleryImage {
  url: string;
  title: string;
}

interface CategoryGalleryProps {
  images: GalleryImage[];
}

/**
 * Компонент галереи для страницы категории
 */
const CategoryGallery = ({ images }: CategoryGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-60 bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/90 text-black rounded-full p-2">
                <Icon name="ZoomIn" className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-1 z-10 hover:bg-black"
            >
              <Icon name="X" className="h-6 w-6" />
            </button>
            
            {selectedImage && (
              <div className="flex flex-col">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="max-h-[80vh] max-w-full object-contain"
                  />
                </div>
                <div className="bg-black text-white p-4">
                  <h3 className="text-lg font-medium">{selectedImage.title}</h3>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CategoryGallery;
