import Image ,{ StaticImageData }from 'next/image';
import Link from 'next/link';
import misideImage from '@/images/miside.png';
import misideModsImage from '@/images/miside-mods.png';
import misideGameImage from '@/images/miside-game.png';
interface Mod {
  id: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  category: string;
  downloads: number;
}

const mods: Mod[] = [
  {
    id: '1',
    title: 'MiSide-AssetLoader',
    description: '',
    imageUrl: misideImage,
    category: 'Story',
    downloads: 15000,
  },
  {
    id: '2',
    title: 'Emo Mita',
    description: '',
    imageUrl: misideModsImage,
    category: 'Visual',
    downloads: 12000,
  },
  {
    id: '3',
    title: 'Olesha Mita',
    description: '',
    imageUrl: misideGameImage,
    category: 'Character',
    downloads: 10000,
  },
  // Add more mods as needed
];

export default function ModShowcase() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured MiSide Mods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mods.map((mod) => (
            <div key={mod.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={mod.imageUrl}
              alt={mod.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{mod.title}</h3>
                <p className="text-gray-600 mb-4">{mod.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {mod.category}
                  </span>
                  <span className="text-sm text-gray-500">{mod.downloads} downloads</span>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50">
                <a 
                  href="https://store.steampowered.com/app/2527500/MiSide/" 
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}