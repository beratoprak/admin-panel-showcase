import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

type Brand = { id: string; name: string };

type CategoryRow = {
  id: string;
  name: string;
  slug: string;
  image?: string | null;
  sortOrder: number;
  isActive: boolean;
  _count: { products: number };
  categoryBrands: { id: string; brand: Brand }[];
};


const categories: CategoryRow[] = [
  {
    id: "cat-1",
    name: "Baharatlar",
    slug: "baharatlar",
    image: null,
    sortOrder: 1,
    isActive: true,
    _count: { products: 1240 },
    categoryBrands: [
      { id: "cb-1", brand: { id: "b-1", name: "Mecitefendi" } },
      { id: "cb-2", brand: { id: "b-2", name: "Aksuvital" } },
      { id: "cb-3", brand: { id: "b-3", name: "Zühre Ana" } },
      { id: "cb-4", brand: { id: "b-4", name: "Kadirzade" } },
    ],
  },
  {
    id: "cat-2",
    name: "Çaylar",
    slug: "caylar",
    image: null,
    sortOrder: 2,
    isActive: true,
    _count: { products: 540 },
    categoryBrands: [{ id: "cb-5", brand: { id: "b-5", name: "Yedier" } }],
  },
  {
    id: "cat-3",
    name: "Yağlar",
    slug: "yaglar",
    image: null,
    sortOrder: 3,
    isActive: false,
    _count: { products: 210 },
    categoryBrands: [],
  },
];

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brown-900">Kategoriler</h1>
          <p className="text-brown-600 mt-1">Ürün kategorilerini yönetin</p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg"
        >
          <Plus size={20} />
          Yeni Kategori
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-brown-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-brown-50 border-b border-brown-200">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-brown-900">Görsel</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-brown-900">Kategori Adı</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-brown-900">Markalar</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-brown-900">Ürün Sayısı</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-brown-900">Sıra</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-brown-900">Durum</th>
              <th className="text-right px-6 py-4 text-sm font-semibold text-brown-900">İşlemler</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-brown-100">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-brown-50 transition">
                <td className="px-6 py-4">
                  {category.image ? (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image src={category.image} alt={category.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-brown-100 rounded-lg flex items-center justify-center">
                      <span className="text-brown-400 text-xs">Görsel Yok</span>
                    </div>
                  )}
                </td>

                <td className="px-6 py-4">
                  <div className="font-medium text-brown-900">{category.name}</div>
                  <div className="text-sm text-brown-500">{category.slug}</div>
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {category.categoryBrands.length > 0 ? (
                      <>
                        {category.categoryBrands.slice(0, 3).map((cb) => (
                          <span
                            key={cb.id}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                          >
                            {cb.brand.name}
                          </span>
                        ))}
                        {category.categoryBrands.length > 3 && (
                          <span className="text-xs text-brown-500">
                            +{category.categoryBrands.length - 3} daha
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-sm text-brown-400">Marka seçilmedi</span>
                    )}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="text-brown-700">{category._count.products}</span>
                </td>

                <td className="px-6 py-4">
                  <span className="text-brown-600">{category.sortOrder}</span>
                </td>

                <td className="px-6 py-4">
                  {category.isActive ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      Aktif
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                      Pasif
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 text-right">
                  <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                    Düzenle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brown-500">Henüz kategori eklenmedi.</p>
          </div>
        )}
      </div>

      <p className="text-xs text-brown-500">
        Not: Bu sayfa, gerçek projedeki kategori yönetimi ekranının vitrin amaçlı güvenli bir örneğidir (fake data kullanır,
        DB/Prisma bağımlılıkları çıkarılmıştır).
      </p>
    </div>
  );
}
