import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, GraduationCap, Award, Wrench, Globe } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio";

export const metadata = {
  title: "Meet Me · Fachri All Khijaro",
  description: "Biography, Career Experience, Education, and Skills of Fachri All Khijaro.",
};

export default function MeetMePage() {
  const education = {
    institution: "Esa Unggul University",
    degree: "Bachelor of Visual Communication Design (S.Ds)",
    period: "June 2014 - October 2018 · West Jakarta",
    gpa: "3.44 / 4.00",
  };

  const certifications = [
    {
      title: "UI/UX Research & Design Bootcamp",
      issuer: "Harisenin.com · August 2023",
      desc: "Designed a mobile banking app from scratch, covering end-to-end design thinking, user personas, wireframing, and interactive prototypes.",
    },
    {
      title: "UI/UX Design Bootcamp",
      issuer: "Sanbercode · October 2021",
      desc: "Created a comprehensive mental health app, applying design thinking and user research to a complete high-fidelity prototype.",
    },
    {
      title: "Junior Graphic Designer Certification",
      issuer: "BNSP (Badan Nasional Sertifikasi Profesi) · May 2019",
      desc: "Validated competency in professional visual layout, brand identity standards, and publication design.",
    },
  ];

  const skillCategories = [
    { name: "UI/UX & Product", items: "Figma, Wireframing, User Flow, Design System, Usability Testing" },
    { name: "Brand & Visual", items: "Visual Identity, Logo Design, Packaging, Editorial Typography, Color Theory" },
    { name: "Creative Suite", items: "Adobe Illustrator, Photoshop, InDesign, Premiere Pro, After Effects" },
    { name: "Collaboration", items: "Notion, Trello, Slack, Cross-Functional Leadership" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-16">
      {/* Top Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Come In</span>
      </Link>

      {/* Profile Header Card */}
      <section className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200/80 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white shrink-0">
          <Image
            src="/assets/portrait-meet.jpg"
            alt="Fachri All Khijaro"
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            Multidisciplinary Designer
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-900 leading-tight">
            Fachri All Khijaro.
          </h1>
          <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
            I work where visual design, branding, marketing, and digital products meet. I love turning complex business goals into simple, human visual narratives that users get at a glance.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="mailto:fachryall.works@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs sm:text-sm font-medium shadow-xs hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>fachryall.works@gmail.com</span>
            </a>
            <a
              href="/assets/Fachri-All-Khijaro-CV.pdf"
              download="Fachri All Khijaro CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-800 text-xs sm:text-sm font-medium border border-neutral-200 hover:bg-neutral-100 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* 01: Career Experience Timeline */}
      <section className="space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            01 · Career Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 mt-1">
            Where I have worked.
          </h2>
        </div>

        <div className="relative border-l-2 border-neutral-200 ml-4 space-y-10 pl-6 sm:pl-8">
          {EXPERIENCES.map((item) => (
            <div key={item.company} className="relative space-y-3">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-neutral-900 border-2 border-white shadow-xs" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                  {item.company}
                </h3>
                <span className="text-xs font-mono text-neutral-500 font-medium">{item.period}</span>
              </div>

              <div className="text-xs sm:text-sm font-mono text-neutral-500 font-semibold">
                {item.role} · {item.division}
              </div>

              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                {item.description}
              </p>

              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-neutral-500 font-light">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 02: Education */}
      <section className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            02 · Academic Background
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-1 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-neutral-800" />
            <span>Education</span>
          </h2>
        </div>

        <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-serif text-2xl font-bold text-neutral-900">{education.institution}</h3>
            <span className="text-xs font-mono text-neutral-500">{education.period}</span>
          </div>
          <p className="text-sm font-mono text-neutral-700 font-medium">{education.degree}</p>
          <p className="text-xs font-mono text-neutral-500">GPA: {education.gpa}</p>
        </div>
      </section>

      {/* 03: Certifications */}
      <section className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            03 · Professional Development
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-1 flex items-center gap-2">
            <Award className="w-6 h-6 text-neutral-800" />
            <span>Certifications</span>
          </h2>
        </div>

        <div className="grid gap-4">
          {certifications.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-1.5">
              <h3 className="font-serif text-xl font-bold text-neutral-900">{c.title}</h3>
              <p className="text-xs font-mono text-neutral-500 font-semibold">{c.issuer}</p>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04: Skills & Tools */}
      <section className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            04 · Skills & Stack
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-1 flex items-center gap-2">
            <Wrench className="w-6 h-6 text-neutral-800" />
            <span>What I Work With</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map((s) => (
            <div key={s.name} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
              <h3 className="font-serif text-lg font-bold text-neutral-900">{s.name}</h3>
              <p className="text-xs sm:text-sm font-sans text-neutral-600 leading-relaxed font-light">{s.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 05: Languages */}
      <section className="space-y-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            05 · Communication
          </span>
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mt-1 flex items-center gap-2">
            <Globe className="w-6 h-6 text-neutral-800" />
            <span>Languages</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center space-y-1 shadow-2xs">
            <span className="font-serif text-xl font-bold text-neutral-900">Indonesian</span>
            <span className="block text-xs font-mono text-neutral-500 uppercase">Native Proficiency</span>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 text-center space-y-1 shadow-2xs">
            <span className="font-serif text-xl font-bold text-neutral-900">English</span>
            <span className="block text-xs font-mono text-neutral-500 uppercase">Professional Working</span>
          </div>
        </div>
      </section>
    </div>
  );
}
