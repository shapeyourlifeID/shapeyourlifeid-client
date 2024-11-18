import HeroLayout from "../HeroLayout";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <HeroLayout
      left={
        <img
          src="/images/hero/home.png"
          className="img-fluid w-100 syl-hero__image"
          alt="team"
        />
      }
      right={
        <>
          <h1 className="syl-hero__title">Achieve your true potential</h1>
          <p className="syl-hero__description">
            A youth-led organization focuses on empowering marginalized students
            in Indonesia to achieve SDG: 4.7 Global Citizenship Education.
            Helping Indonesian students reach their maximum potential and pursue
            higher education abroad.
          </p>
          <Button value="Find Out More" color={"btn-yellow text-dark-blue"} />
        </>
      }
    />
  );
}
