import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Camera } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
<div className="min-h-screen bg-black text-white">
  {/* Hero Section */}
  <section className="container px-4 pt-32 pb-20 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-shrink-0">
        <Image
          src="/images/eyup.jpg"
          alt="Profile photo"
          width={420}
          height={420}
          priority
          className="animate-in fade-in zoom-in duration-1000 rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="animate-in fade-in slide-in-from-bottom-3 duration-1000 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Eyüp Şengöz
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 mt-6 max-w-3xl text-lg text-muted-foreground">
          Performans ve tasarım odaklı masaüstü uygulamaları geliştiriyorum. Kullanıcı deneyimini ön planda tutarak, hem estetik hem de işlevselliği bir araya getiren çözümler sunuyorum. Modern teknolojilerle, ihtiyaçlara tam anlamıyla cevap veren yenilikçi yazılımlar oluşturmak benim tutkum.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 mt-8 flex gap-4">
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:eyupsengoz@losa.dev">
              <Mail className="mr-2 h-4 w-4" />
              İletişim
            </Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link href="https://github.com/lewislosa">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
      {/* Projects Section */}
      <section className="container px-4 md:px-6 my-10">
        <h2 className="mb-12 text-2xl font-bold tracking-tight">Projeler ⭐</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group relative overflow-hidden border-muted bg-black">
              <CardContent className="p-0">
                <Link href={project.link} className="block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Hakkımda 🧑‍💻</h2>
            <p className="mt-4 text-muted-foreground">
              Merhaba! Ben Eyüp, İstanbul doğumluyum ve şu an liseye gidiyorum. Yazılım ve tasarımla uğraşmayı seviyorum. Boş zamanlarımda oyun oynamak yerine genelde kodlama yapıyorum. Bu arada, kremalı mantar çorbasına bayılırım, kedileri çok severim.
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://galeri.losa.dev">
                  <Camera className="mr-2 h-4 w-4" />
                  Galerim
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Yetenekler 🔥</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-full border border-muted px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted">
        <div className="container flex items-center justify-between px-4 py-6 md:px-6">
          <p className="text-sm text-muted-foreground">© 2025. Tüm hakları saklıdır.</p>
          <Button variant="ghost" size="sm" asChild>
            <Link href="mailto:eyupsengoz@losa.dev">eyupsengoz@losa.dev</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "Proje 1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eligendi perferendis facere placeat obcaecati maiores dolore eius nam impedit fuga libero id est aspernatur corrupti porro, natus ducimus magnam modi.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    title: "Proje 2",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eligendi perferendis facere placeat obcaecati maiores dolore eius nam impedit fuga libero id est aspernatur corrupti porro, natus ducimus magnam modi.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    title: "Proje 3",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis eligendi perferendis facere placeat obcaecati maiores dolore eius nam impedit fuga libero id est aspernatur corrupti porro, natus ducimus magnam modi.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
];

const skills = [
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Premiere Pro",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "Python",
  "C++",
  "SQLite",
  "MySQL",
  "Linux",
];
