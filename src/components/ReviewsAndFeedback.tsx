/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CLIENT_REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquare, ShieldCheck, PenTool, CheckCircle } from 'lucide-react';
import { Testimonial } from '@/components/ui/testimonial-card';

export default function ReviewsAndFeedback() {
  const [reviews, setReviews] = useState<Review[]>([]);

  // Load reviews from local storage, merging with defaults
  useEffect(() => {
    const saved = localStorage.getItem('nellope_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        setReviews([...parsed, ...CLIENT_REVIEWS]);
      } catch (e) {
        console.error('Error parsing saved reviews', e);
        setReviews(CLIENT_REVIEWS);
      }
    } else {
      setReviews(CLIENT_REVIEWS);
    }
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Area */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] font-semibold uppercase text-[#6c5a56] block mb-3">
            Histórias Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#6c5a56] font-medium tracking-tight">
            Depoimentos de Nossas Clientes
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#4f4542] mt-4 font-light">
            A satisfação em cada detalhe é a nossa prioridade. Veja a opinião das clientes que vivenciam a experiência premium em nosso atelier.
          </p>
        </div>

        {/* Fully Responsive Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev) => (
            <Testimonial
              key={rev.id}
              name={rev.clientName}
              role={rev.role || 'Cliente Satisfeita'}
              company={rev.company || (rev.verified ? 'Cliente Verificada' : undefined)}
              testimonial={rev.comment}
              rating={rev.rating}
              image={rev.image}
              className="bg-[#f9f9f8] border border-[#6c5a56]/10 hover:border-[#6c5a56]/20 transition-all duration-300 shadow-none hover:shadow-md h-full flex flex-col justify-between"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
