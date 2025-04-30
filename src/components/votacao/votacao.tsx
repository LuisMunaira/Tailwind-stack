'use client'
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import img from './Captura de ecrã 2024-11-29 192621.png'

interface Candidate {
  id: number;
  name: string;
  image: any;
  votes: number;
}

const Index = () => {
  const [totalVoters, setTotalVoters] = useState<number>(0);
  const [totalVotes, setTotalVotes] = useState<number>(0);
  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: 1,
      name: "Venancio Mondlane",
      image: 'https://integritymagazine.co.mz/wp-content/uploads/2024/02/Venancio-Mondlane-anuncia-candidatura-a-presidencia-da-Renamo-jpg.webp',
      votes: 0,
    },
    {
      id: 2,
      name: "Ossufo Momade",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      votes: 0,
    },
    {
      id: 3,
      name: "Daniel Chapo",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      votes: 0,
    },
    {
      id: 4,
      name: "Daivd Simango",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      votes: 0,
    },
  ]);

  const handleVoterCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value) || 0;
    setTotalVoters(count);
  };

  const handleVote = (candidateId: number) => {
    if (totalVotes >= totalVoters) {
      alert("O número máximo de votos já foi atingido.");
      return;
    }

    setCandidates((prev) =>
      prev.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
    setTotalVotes((prev) => prev + 1);
  };

  const calculatePercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return (votes / totalVotes) * 100;
  };

  const chartData = candidates.map(candidate => ({
    name: candidate.name,
    value: candidate.votes,
    percentual: calculatePercentage(candidate.votes)
  }));

  const COLORS = ['#9b87f5', '#7E69AB', '#D6BCFA'];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Votação</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Configuração da Eleição</h2>
          <div className="flex gap-4 items-center">
            <input 
              type="number" 
              value={totalVoters}
              onChange={handleVoterCountChange}
              placeholder="Total de eleitores"
              className="border rounded px-3 py-2"
            />
            <span className="text-gray-600">
              Total de votos: {totalVotes} / {totalVoters}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="space-y-6">
            {candidates.map((candidate) => (
              <article key={candidate.id} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-purple-500 rounded-full transition-all duration-300"
                            style={{
                              width: `${calculatePercentage(candidate.votes)}%`,
                            }}
                          ></div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {candidate.votes} votos ({calculatePercentage(candidate.votes).toFixed(1)}%)
                        </div>
                      </div>
                      <button
                        onClick={() => handleVote(candidate.id)}
                        disabled={totalVotes >= totalVoters}
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Votar
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Resultado Parcial</h3>
            {totalVotes > 0 ? (
              <div className="h-[400px]">
                <PieChart width={400} height={400}>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  {/* Custom Text in the center */}
                  <text 
                    x="50%" 
                    y="50%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fontSize={18} 
                    fill="#333"
                  >
                  
                  </text>
                </PieChart>
              </div>
            ) : (
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-gray-500">Nenhum voto registrado ainda</p>
              </div>
            )}
             <div className="mt-4">
              {chartData.map((data) => (
                <div key={data.name} className="flex justify-between mb-2">
                  <span className="font-semibold">{data.name}</span>
                  <span className="text-gray-600">{data.percentual.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
