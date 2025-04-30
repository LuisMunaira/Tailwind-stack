import Pagina from '@/components/template/Pagina'
import { IconUser, IconShieldLock, IconDeviceDesktopCode, IconDatabase, IconFileChart } from '@tabler/icons-react';

export default function Home() {
    

const skills = [
  { name: 'Testes de Penetração', icon: <IconShieldLock size={24} /> },
  { name: 'FullStack Development', icon: <IconDeviceDesktopCode size={24} /> },
  { name: 'Análise de Incidentes', icon: <IconUser size={24} /> },
  { name: 'Redes de Computadores', icon: <IconDeviceDesktopCode size={24} /> },
  { name: 'Infraestrutura', icon: <IconDeviceDesktopCode size={24} /> },
  { name: 'SQL', icon: <IconDatabase size={24} /> },
  { name: 'Excel', icon: <IconFileChart size={24} /> },
  { name: 'Power BI', icon: <IconFileChart size={24} /> },
];
    return (
        <Pagina>
            <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Olá,</h1>
          <p className="text-lg text-gray-600 mt-2">Software Engineer </p>
        </header>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">...</h2>
          
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-gray-600 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center mt-12 text-gray-600">
          <p></p>
        </footer>
      </div>
    </div>
        </Pagina>
    )
}
