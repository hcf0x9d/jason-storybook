import React from 'react';

interface Artifact {
  image: string;
  caption?: string;
  alt?: string;
}

interface ArtifactGalleryProps {
  artifacts: Artifact[];
  columns?: 2 | 3 | 4;
}

export const ArtifactGallery: React.FC<ArtifactGalleryProps> = ({
  artifacts,
  columns = 3,
}) => {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-4 my-6`}>
      {artifacts.map((artifact, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="aspect-video bg-gray-100 flex items-center justify-center">
            <img
              src={artifact.image}
              alt={artifact.alt || artifact.caption || `Artifact ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          {artifact.caption && (
            <div className="p-3 text-sm text-gray-600 bg-gray-50">
              {artifact.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
