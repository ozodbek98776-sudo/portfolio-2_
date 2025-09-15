import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border px-2.5 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

const projects = [
  {
    title: "uzb_tube",
    desc: "Video platforma — qidiruv, toifalar va ko‘rish tarixini qo‘llab-quvvatlaydi.",
    tags: ["React", "SPA", "API"],
    image: "https://images.unsplash.com/photo-1649180543887-158357417159?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Portfolio",
    desc: "Shaxsiy portfoliyo — minimalistik dizayn, responsiv layout va tezkor UX.",
    tags: ["UI/UX", "Responsive", "A11y"],
    image: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
  },
  {
    title: "Dorixona sayti",
    desc: "Dorilar katalogi, qidiruv/filtrlash va savat funksiyalari bilan e‑commerce.",
    tags: ["E‑commerce", "State", "Performance"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/372/442/small_2x/hospital-building-with-ambulance-emergency-car-on-cityscape-background-cartoon-illustration-vector.jpg",
  },
];

export default function Index() {
  const [showPhone, setShowPhone] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (showPhone) phoneRef.current?.select();
  }, [showPhone]);
  return (
    <>
      {/* Hero */}
      <section className="relative border-b">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-150px,theme(colors.gray.100),transparent)]" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Portfolio</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
              Salom, men Ozodbek — minimalistik va zamonaviy veb‑saytlar yaratuvchisiman.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects" className="inline-flex items-center gap-2">
                  Loyihalarim <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Bog'lanish</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-4">
              {["Pixel‑perfect", "Responsive", "Tez va yengil", "Toza kod"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-16 md:py-24">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Tanlangan loyihalar</h2>
          </div>
          <a
            href="https://github.com/ozodbek98776-sudo"
            target="_blank"
            rel="noreferrer"
            className="max-w-none md:max-w-md text-left md:text-right text-base md:text-lg font-medium text-sky-600 hover:text-sky-700"
          >
            Agar loyihalarimni ko'rmoqchi bo'lsangiz github havoladan topasiz-https://github.com/ozodbek98776-sudo
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-lg">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="h-36 sm:h-40 md:h-48 w-full object-cover"
              />
              <CardContent className="space-y-3 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  {p.title === "Dorixona sayti" ? (
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                      aria-label="Open project"
                    >
                      demo <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                      aria-label="Open project"
                    >
                      demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-y bg-secondary/50">
        <div className="container py-14">
          <h2 className="text-center text-2xl font-bold md:text-3xl">Texnologiyalar</h2>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind"] .map((s) => (
              <div
                key={s}
                className="flex items-center justify-center rounded-md border bg-background px-3 py-2 text-sm text-muted-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-gradient-to-b from-gray-50 to-white p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">Birgalikda ajoyib loyiha qilamizmi?</h2>
          <p className="mt-3 text-muted-foreground">
            G'oyangizni chiroyli, toza va samarali yechimga aylantirishga yordam beraman.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            {showPhone ? (
              <div className="flex items-center gap-3">
                <Input
                  ref={phoneRef}
                  readOnly
                  value="91 411 80 30"
                  className="w-44 text-center font-medium"
                />
                <Button asChild variant="outline">
                  <a href="tel:+998914118030">Qo'ng'iroq qilish</a>
                </Button>
              </div>
            ) : (
              <Button onClick={() => setShowPhone(true)}>Bog'lanish</Button>
            )}
            <Button asChild variant="outline">
              <a href="#projects">Loyihalarim</a>
            </Button>
          </div>
        </div>
      </section>
      <section className="container pb-12">
        <p className="text-center text-blue-600 text-base md:text-lg font-medium">
          Agar dasturlash yani IT sohasini yoki zamonaviy kasblarni o'rganmoqchi bo'lsangiz proX academiyasiga murojaat qilishingizni tavsiya etaman-<a href="https://prox.uz/" target="_blank" rel="noreferrer" className="underline">https://prox.uz/</a>,
        </p>
      </section>
    </>
  );
}
