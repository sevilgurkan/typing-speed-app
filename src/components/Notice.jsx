import { useTranslation } from "../i18n";

export function Notice({ translationKey }) {
  const { translation } = useTranslation();
  return (
    <div className="mt-5 text-center text-sm text-yellow-500">
      {translation(translationKey)}
    </div>
  );
}
