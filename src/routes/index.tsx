import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="container mx-auto flex flex-col items-center gap-y-12 pt-40 px-16">
      <h1 className="font-serif font-normal text-neutral-500 text-4xl">
        Introducing{" "}
        <span className="font-bold text-black font-archivo text-8xl">
          Bubbo
        </span>
      </h1>
      <p className="font-serif font-normal text-neutral-900 text-2xl">
        create and share lists with family & friends
      </p>

      <Link to="/lists">
        <Button>
          Get started <ArrowRight />
        </Button>
      </Link>
      <Star15 className="fixed -bottom-50 -left-32 m-4 -z-10 slow-rotate  h-96 w-96 text-rose-400" />
      <Star30 className="fixed -top-40 -right-32 m-4 -z-10 slow-rotate h-96 w-96 text-green-300" />
    </main>
  );
}

/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsZJREFUSEuNVk1PGkEYfhZJSCB1PVTSbblhUxNKKkZpkb/AoXKo/8RUwF7s2uov8aKr/Q9dalLAWElMyrVi5KImEGPCbjOzszuzzCxxLzsMM+/zvs/zfqzmuq4L9pCF5v+Y9p56MPynRgGebBkRR4kJDZrCjgdAH3aIrXks/JZp7tJz9VodSmuKqDXHdd0oWi4vL5HL5bC5uYlUMoXtL9vUxM7ODobDIfb399HtdrG4+MaLQAUgaUAd9qJZXi7grHPmXSO3A7X41rulJXQ6bVk9ZkegyLt/dfUPxdUiRqMRbm9vuU8UgHjpkhdd0xsaMKfPIZVM4tfpKTKZTEgnjyKGRk43m02srZXV7gpGJ8EI8E/bRqn0IRSNFEH34gL5fH4qLT4Op86L5vzPOfJv2V0WewigWq3CsqwJwkVawlKITPlgG582cHBwEFAbZNH9/T10XfdxZYqeUoDszN3dHWafzVJvQhGsrKyg1W752kliBrxPASsUCmi326wiXQbAaqlcLsNu2lI6RqWpar9UKsG27aD5BBGYpolGoxGmSCJZWQ4T8Wgwza+o1Woevt+LrGMLRGT/kepKqgNV2XrSWUdH+Li+LgCw/nPdv4bx6iUvoqnCKkqbFuoVDMMIumKoFw0GA6TTaZqmvGIVtKhtU3dubgaYn3/OmeDt2sXu7jfUG3WeRaKKotGoNQCipc8/1YC3Ci+qXu8vtj5v4fDwMHA9ymFxn+i3930PC68XPO9ZZgoDh/d9xxljZiYeZJRIl9j96D7bGI/HiMViE3NlotBETcnheDyOZDIJUpmhh7k+q+sYDYcgxh3HUaZEqJJ5aOJ0AxKJBB4fH5HNZqFpGnq9Ht17eHiImqFcZHGiCV075M11v4/frRYqlQrdP/lxguLqexjGC6XXoh2pXcuDOxyNujSivxpkAMmC4otBGKveHFY4wTD/A6rJecWdWrKsAAAAAElFTkSuQmCC)
 */
export function Star15({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string;
  size?: number;
  stroke?: string;
  pathClassName?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="M95.713 9.378a6 6 0 0 1 8.574 0l9.515 9.717a6 6 0 0 0 6.496 1.381l12.645-5.007a6 6 0 0 1 7.833 3.487l4.74 12.748a6 6 0 0 0 5.372 3.903l13.589.57a6 6 0 0 1 5.737 6.371l-.855 13.573a6 6 0 0 0 3.321 5.752l12.182 6.046a6 6 0 0 1 2.649 8.154l-6.301 12.053a6 6 0 0 0 .694 6.604l8.67 10.479a6 6 0 0 1-.897 8.527l-10.658 8.447a6 6 0 0 0-2.052 6.316l3.657 13.099a6 6 0 0 1-4.287 7.426l-13.173 3.381a6 6 0 0 0-4.443 4.936l-1.987 13.454a6 6 0 0 1-6.936 5.04l-13.41-2.269a6 6 0 0 0-6.066 2.701l-7.287 11.483a6 6 0 0 1-8.387 1.783l-11.327-7.527a6 6 0 0 0-6.641 0l-11.328 7.527a6 6 0 0 1-8.387-1.783l-7.287-11.483a6 6 0 0 0-6.066-2.701l-13.41 2.269a6 6 0 0 1-6.936-5.04l-1.987-13.454a6 6 0 0 0-4.443-4.936l-13.173-3.381a6 6 0 0 1-4.287-7.426l3.657-13.099a6 6 0 0 0-2.052-6.316l-10.658-8.447a6 6 0 0 1-.897-8.527l8.67-10.479a6 6 0 0 0 .694-6.604l-6.301-12.053a6 6 0 0 1 2.65-8.154l12.181-6.046a6 6 0 0 0 3.32-5.752l-.854-13.573a6 6 0 0 1 5.737-6.372l13.588-.569a6 6 0 0 0 5.373-3.903l4.74-12.748a6 6 0 0 1 7.833-3.487l12.645 5.007a6 6 0 0 0 6.496-1.38z"
      />
    </svg>
  );
}

/**
 * @preview ![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA49JREFUSEuFVjlPG0EU/na9PqiJMJUxUiiROIQNiIJUToJwiiBsC/EHoKKgsSkxSJSBKPSEy0ImcgT5A8TYRiFBlETiqIg4WtbeY6KZPcc2yTR7zLzz+957IxBCCP6z6AGBnXHenhdxnyEQmAH2j98gEEylblX0qFB/lFlvbppA0Akhhne8IkvquHSMoaEheDwezM3NQZZlrH9ah6qpOD429uxlOup2zoigiQFFUXH26wwDkQF8OzzEm7G3aA+2Q1VV3N/fo1Ao4F08jnKlgp6eXkheyYzMjNLUyRmwMrW1vYWpqSkUi0UMDw8jEAigKlctICAIArxeCdVqDUdHRxgZGcHOzg4SiUQdUk1StLGxgcnJSaaUrnA4jKurK8sfE2jjs6OjA9fX14wCsvyEvb095pjbioGBiZCiKPD5fGw/k04ju7xkoEcXBYpQ4Al9sP/mA+l0GstLS+y/UqtBkrx20l0pIiiVyhAFEdHBqC1s63as2JotA5a2k8oJNF1DNBp1DFgsooyg+aaaO0Jm6HWeOj430iIUCuHm5oZtlEol24irDoCDw0NMTLyH/CQ3auAz5aTL9T8QaMH+l33EYrG6FBEwmmmaxhhiEJdL/r+cd5QxWQJRFJkuqsMutPn5eXze3MSf21tmgIFp5t15t7FmEXBIMx4ICLYHMT09jZWVFUPaahUzszPYzeXw+PBgUaZpmkwyNWUXNdH6ohWTiQQ+rq0ZBiyaWikSPSJ0TW9U3kRzfZSCKELXdYgeDzRFZeFylZzP55FKpVCrKRzfn0W8bsPv9yOXyyEej5s7VjcFUC5XMDho8Ler6yUuLn67eeMAacPPF11nOIxLs+Jpi7GaIEfT8/NzPD4+YnT0lQtAdzm5geXLjH59LxZZJ+jv729WyQBrFX4fY8jCQgaL2cXmbK0r4UwmjWx2iSmt0Vbh9dqzhGsVFBXahmOx12gJ+BlNw+FOXF9d2pR1LPKNkM6J/H4eqWTK8N7sb66B4/Tx3d1dpJJJ/Dg9RV9fH9euqZwoCvB5/ajKTyiVy6wtbG9vI5lIOpPR7P1cBM4kItA0Hac/TxEZiODg4ABjY2NoawuCEB1393f4WihgfDyOSqWC3t5eSJLEc8qKwJlo/Ly1ZiwFvru7m43M2dlZ9lz9sApVUxjzopGoM5NNIfd8bsDAcsN9D3De+XHIXxMa7g2NhfacgPva8tytwgGWv1/8BUsn8cKdVvgjAAAAAElFTkSuQmCC)
 */
export default function Star30({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string;
  size?: number;
  stroke?: string;
  pathClassName?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="m96.165 11.506 3.795 21.14 3.701-21.14c1.708-9.86 16.415-7.964 15.561 1.99l-1.803 21.425 9.109-19.434c4.27-9.006 17.839-3.413 14.423 5.972l-7.306 20.193 13.758-16.4c6.452-7.68 18.123 1.326 12.43 9.48l-12.335 17.632 17.554-12.324c8.16-5.688 17.174 5.972 9.583 12.419l-16.415 13.84 20.211-7.3c9.393-3.412 15.086 10.239 5.977 14.41l-19.451 9.1 21.444-1.895c9.963-.854 11.861 13.745 2.088 15.547l-21.16 3.792 21.16 3.697c9.868 1.706 7.97 16.4-1.993 15.547l-21.444-1.801 19.451 9.1c9.014 4.266 3.416 17.822-5.977 14.41l-20.211-7.3 16.415 13.841c7.686 6.446-1.328 18.106-9.488 12.418l-17.649-12.323 12.335 17.537c5.693 8.153-5.978 17.159-12.43 9.575l-13.853-16.4 7.306 20.192c3.416 9.385-10.248 15.073-14.423 5.972l-9.109-19.434 1.898 21.425c.854 9.954-13.758 11.85-15.561 2.085l-3.796-21.14-3.7 21.14c-1.708 9.86-16.415 7.964-15.561-1.99l1.802-21.425-9.014 19.15c-4.27 9.005-17.838 3.412-14.422-5.973l7.306-20.192-13.853 16.4c-6.453 7.679-18.123-1.327-12.43-9.48l12.335-17.632-17.554 12.324c-8.16 5.688-17.174-5.973-9.583-12.419l16.415-13.84-20.21 7.299c-9.3 3.508-14.993-10.143-5.979-14.315l19.452-9.1-21.444 1.896c-9.963.853-11.86-13.746-2.088-15.547l21.16-3.792-21.065-3.697c-9.773-1.707-7.875-16.306 2.088-15.452l21.444 1.8-19.547-9.1c-9.014-4.266-3.415-17.822 5.978-14.41l20.21 7.3-16.414-13.84c-7.686-6.447 1.328-18.107 9.488-12.42l17.649 12.325-12.335-17.538c-5.693-8.153 5.977-17.159 12.43-9.575l13.853 16.4-7.306-20.192c-3.511-9.29 10.153-14.978 14.328-5.972L82.5 34.921l-1.897-21.33c-.854-9.954 13.853-11.85 15.561-2.085"
      />
    </svg>
  );
}
