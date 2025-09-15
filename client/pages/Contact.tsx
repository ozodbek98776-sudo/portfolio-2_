import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl space-y-10">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Bog'lanish</h1>
          <p className="text-muted-foreground">
            Qisqa xabar qoldiring — imkon qadar tez javob beraman.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Telefon raqamim</label>
            <div className="flex items-center gap-3">
              <Input readOnly value="91 411 80 30" className="w-44 text-center font-medium" />
              <Button asChild variant="outline">
                <a href="tel:+998914118030">Qo'ng'iroq qilish</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
