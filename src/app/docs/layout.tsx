import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      themeSwitch={{
        enabled: false,
      }}
      sidebar={{
        defaultOpenLevel: 10,
      }}
    >
      {children}
    </DocsLayout>
  );
}