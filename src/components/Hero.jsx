import { useTranslation } from "../i18n";

export function Hero() {
  const { translation } = useTranslation();

  return (
    <section className="w-full text-center mt-4 mb-8">
      <h1 className="text-3xl text-[#2b6380]">{translation("title")}</h1>
    </section>
  );
}
