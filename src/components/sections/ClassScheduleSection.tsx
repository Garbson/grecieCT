import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

export function ClassScheduleSection() {
  const isMobile = useIsMobile();

  const weekdays = [
    {
      day: "Segunda",
      classes: [
        { time: "07:00", name: "Fundamentos", level: "Iniciante" },
        { time: "10:00", name: "Técnicas Avançadas", level: "Intermediário/Avançado" },
        { time: "18:00", name: "Kids Jiu-Jitsu", level: "Todas as idades" },
        { time: "19:30", name: "Treino de Competição", level: "Todos os níveis" },
      ]
    },
    {
      day: "Terça",
      classes: [
        { time: "07:00", name: "Drilling", level: "Todos os níveis" },
        { time: "10:00", name: "Jiu-Jitsu para Mulheres", level: "Todos os níveis" },
        { time: "18:00", name: "Kids Jiu-Jitsu", level: "Todas as idades" },
        { time: "19:30", name: "Sparring", level: "Todos os níveis" },
      ]
    },
    {
      day: "Quarta",
      classes: [
        { time: "07:00", name: "Fundamentos", level: "Iniciante" },
        { time: "10:00", name: "Jiu-Jitsu No Gi", level: "Todos os níveis" },
        { time: "18:00", name: "Kids Jiu-Jitsu", level: "Todas as idades" },
        { time: "19:30", name: "Técnicas Avançadas", level: "Intermediário/Avançado" },
      ]
    },
    {
      day: "Quinta",
      classes: [
        { time: "07:00", name: "Drilling", level: "Todos os níveis" },
        { time: "10:00", name: "Jiu-Jitsu para Mulheres", level: "Todos os níveis" },
        { time: "18:00", name: "Kids Jiu-Jitsu", level: "Todas as idades" },
        { time: "19:30", name: "Sparring", level: "Todos os níveis" },
      ]
    },
    {
      day: "Sexta",
      classes: [
        { time: "07:00", name: "Fundamentos", level: "Iniciante" },
        { time: "10:00", name: "Jiu-Jitsu No Gi", level: "Todos os níveis" },
        { time: "18:00", name: "Open Mat", level: "Todos os níveis" },
        { time: "19:30", name: "Treino de Competição", level: "Todos os níveis" },
      ]
    },
    {
      day: "Sábado",
      classes: [
        { time: "09:00", name: "Kids Jiu-Jitsu", level: "Todas as idades" },
        { time: "10:30", name: "Fundamentos", level: "Iniciante" },
        { time: "12:00", name: "Open Mat", level: "Todos os níveis" },
      ]
    },
    {
      day: "Domingo",
      classes: [
        { time: "10:00", name: "Open Mat", level: "Todos os níveis" },
      ]
    },
  ];

  return (
    <section id="schedule" className="mb-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Horários das Aulas</h2>
      <Tabs defaultValue="Segunda" className="max-w-4xl mx-auto">
        {isMobile ? (
          <ScrollArea className="w-full pb-4">
            <TabsList className="inline-flex mb-6 w-auto">
              {weekdays.map((day) => (
                <TabsTrigger key={day.day} value={day.day} className="px-4">{day.day}</TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>
        ) : (
          <TabsList className="grid grid-cols-7 mb-6">
            {weekdays.map((day) => (
              <TabsTrigger key={day.day} value={day.day}>{day.day}</TabsTrigger>
            ))}
          </TabsList>
        )}
        
        {weekdays.map((day) => (
          <TabsContent key={day.day} value={day.day}>
            {isMobile ? (
              <div className="border rounded-lg overflow-hidden">
                {day.classes.map((classItem, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 ${idx % 2 === 0 ? "bg-secondary/30" : ""}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{classItem.time}</span>
                      <span className="text-sm text-muted-foreground">{classItem.level}</span>
                    </div>
                    <div className="font-medium">{classItem.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left">Horário</th>
                      <th className="px-4 py-3 text-left">Aula</th>
                      <th className="px-4 py-3 text-left">Nível</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.classes.map((classItem, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-secondary/30" : ""}>
                        <td className="px-4 py-3 font-medium">{classItem.time}</td>
                        <td className="px-4 py-3">{classItem.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{classItem.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
      <div className="text-center mt-6 text-muted-foreground">
        <p>* As aulas têm duração de 1 hora</p>
        <p>* Chegue 15 minutos antes para se preparar</p>
      </div>
    </section>
  );
}