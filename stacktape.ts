import { AstroWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new AstroWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});
