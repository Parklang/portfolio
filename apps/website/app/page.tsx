import { FloatingHeader } from '@/components/navigation/floating-header';
import { RevealOnLoad } from '@/components/reveal-on-load';
import { ScrollArea } from '@/components/scroll-area';
import { Section } from '@/components/section';
import Separator from '@/components/separator';
import { SkillsVenn } from '@/components/skills-venn';
import { USER } from '@/config/user';
import { GitHubContribution } from '@/features/home/components/github-contribution';
import Info from '@/features/home/components/info';
import { Experiences } from '@/features/home/components/experiences';
import { Testimonials } from '@/features/home/components/testimonials';
import { WordmarkFooter } from '@/components/wordmark-footer';
import { createOgImage } from '@/lib/createOgImage';
import { JsonLd, Organization, WithContext } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import type { Metadata } from 'next/types';

// Allow ISR – GitHub repos are revalidated every hour
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const title = USER.tagline;
  const description = USER.description;
  const image = createOgImage({
    title: title,
    meta: description,
  });
  return createMetadata({
    title: title,
    description: description,
    image: image,
  });
}

export default async function Page() {
  const jsonLd: WithContext<Organization> = {
    '@type': 'Organization',
    '@context': 'https://schema.org',
  };

  return (
    <>
      <JsonLd code={jsonLd} />
      <Info show={['time', 'screen', 'llms']} />
      <ScrollArea useScrollAreaId className="">
        <FloatingHeader scrollTitle="Huy Hoàng" />

        <Separator />

        {/* Hero Section */}
        <Section>
          {/* Name and Title */}
          <RevealOnLoad delay={0} duration={0.5}>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-2xl">Huy Hoàng</h1>
              </div>
              <p className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
                {USER.jobTitle}
              </p>
            </div>
          </RevealOnLoad>

          {/* Description */}
          <RevealOnLoad delay={0.15} duration={0.5}>
            <div className="mt-6 space-y-3 text-foreground/70">
              <p className="leading-relaxed">
                IT professional with a background in software development, system support,
                and cloud operations. I help teams keep systems running smoothly — from
                diagnosing technical issues to deploying and maintaining web applications.
              </p>
              <p className="leading-relaxed text-sm">
                Ứng dụng nền tảng lập trình vào việc hỗ trợ kỹ thuật, vận hành hệ thống
                và giải quyết sự cố — làm việc hiệu quả cả độc lập lẫn theo nhóm.
              </p>
            </div>
          </RevealOnLoad>

          {/* Skills Venn Diagram */}
          <RevealOnLoad delay={0.3} duration={0.6}>
            <SkillsVenn
              profileImage={USER.image.profile}
              skills={{
                top: 'Software Development',
                left: 'IT Support & Operations',
                right: 'Cloud & Infrastructure',
                bottom: 'Automation\n& Scripting',
              }}
              className="mt-8"
            />
          </RevealOnLoad>
        </Section>

        <Separator />

        {/* Testimonials Section */}
        <Section>
          <Testimonials />
        </Section>

        <Separator />

        {/* GitHub Contribution Section */}
        <Section>
          <GitHubContribution />
        </Section>


        <Separator />

        {/* Experiences Section */}
        <Section>
          <Experiences />
        </Section>

        <Separator />

        {/* Wordmark Footer */}
        <Section className="px-0 py-0 sm:px-0 md:py-0">
          <WordmarkFooter brandName={USER.name} />
        </Section>

        <Separator />
        {/* Bottom spacing — matches dock height */}
        <div className="h-[clamp(80px,10vh,200px)] shrink-0" />
      </ScrollArea>
    </>
  );
}
