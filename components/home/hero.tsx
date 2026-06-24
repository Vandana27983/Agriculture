'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { companyStats } from '@/lib/data'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-fields.png"
        alt="Aerial view of lush green farmland at golden hour"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/30" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-44">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-background/30 bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background backdrop-blur"
          >
            Growing the future of farming
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-balance font-heading text-4xl font-semibold leading-tight text-background sm:text-5xl lg:text-6xl"
          >
            Premium farm supplies and expert agronomy in one place
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-background/85"
          >
            From certified seeds and fertilizers to soil testing and irrigation
            planning, Verdant Fields helps your farm grow stronger and yield
            more, season after season.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button render={<Link href="/products" />} size="lg">
              Browse Products
              <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<Link href="/services" />}
              size="lg"
              variant="outline"
              className="border-background/40 bg-background/10 text-background backdrop-blur hover:bg-background/20 hover:text-background"
            >
              Our Services
            </Button>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-background/20 bg-background/10 backdrop-blur sm:grid-cols-4"
        >
          {companyStats.map((stat) => (
            <div key={stat.label} className="bg-foreground/20 px-5 py-5">
              <dt className="font-heading text-2xl font-semibold text-background sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-background/75">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
