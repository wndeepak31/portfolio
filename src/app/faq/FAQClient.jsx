"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './faq.module.css';

export default function FAQClient({ faqs = [] }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState(new Set([0])); // First question open by default

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'shopify', label: 'Shopify' },
    { id: '3d', label: '3D WebGL' },
    { id: 'saas', label: 'Custom SaaS' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'cloud', label: 'Cloud & DevOps' },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleAccordion = (index) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const getCategoryCount = (catId) => {
    if (catId === 'all') return faqs.length;
    return faqs.filter((f) => f.category === catId).length;
  };

  return (
    <div className={styles.faqContainer}>
      {/* Category Filter Pills */}
      <div className={styles.filterPillsWrapper}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.pillButton} ${isActive ? styles.pillActive : ''}`}
              type="button"
            >
              <span>{cat.label}</span>
              <span className={styles.pillCount}>{getCategoryCount(cat.id)}</span>
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className={styles.accordionList}>
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIds.has(index);
          return (
            <div
              key={index}
              className={`${styles.accordionCard} ${isOpen ? styles.accordionCardOpen : ''}`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className={styles.accordionHeader}
                aria-expanded={isOpen}
              >
                <div className={styles.questionWrapper}>
                  {faq.categoryLabel && (
                    <span className={styles.categoryTag}>{faq.categoryLabel}</span>
                  )}
                  <h3 className={styles.questionText}>{faq.question}</h3>
                </div>

                <div
                  className={`${styles.toggleIconBtn} ${
                    isOpen ? styles.toggleIconRotated : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </div>
              </button>

              <div
                className={styles.accordionContentWrapper}
                style={{
                  maxHeight: isOpen ? '400px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className={styles.accordionContent}>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Callout Card */}
      <div className={styles.supportCard}>
        <div>
          <h4 className={styles.supportTitle}>Still have questions?</h4>
          <p className={styles.supportDesc}>
            Can&apos;t find what you&apos;re looking for? Schedule an architecture consultation with our engineering leads.
          </p>
        </div>
        <Link href="/contact" className={styles.supportBtn}>
          Schedule Consultation &rarr;
        </Link>
      </div>
    </div>
  );
}
