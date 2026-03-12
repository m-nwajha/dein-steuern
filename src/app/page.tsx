import { TextField } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-[200vh] items-center justify-center bg-zinc-50 font-sans">
      gfhgfhgfhjdghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      <Button variant="solid" isArrow icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
      </svg>}>
        Unsere Leistungen
      </Button>

      <Button variant="outline" type="submit">
        Absenden
      </Button>

      <TextField
        label="Name"
        name="name"
        placeholder="Ihr Name"
        required
      />
      <TextField label="Nachricht" name="message" multiline rows={6} placeholder="Ihre Nachricht..." />
    </div>
  );
}
