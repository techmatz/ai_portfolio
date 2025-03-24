import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex-col-reverse md:flex-row xl:flex-row lg:flex-col-reverse items-center md:items-start lg:items-center xl:items-start flex bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center xl:items-start md:items-start lg:items-center">
				<div className="flex flex-col items-center md:items-start xl:items-start lg:items-center">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						Matheus Oliveira
					</span>
					<span>Desenvolvedor de Software</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Foco em automação, infraestrutura e CI/CD, com experiência em Python, TypeScript
					e Golang. Conhecimento em Docker, Kubernetes, Terraform e GitOps, integrando IA,
					segurança e escalabilidade para otimizar processos.
				</p>
			</div>
		</div>
	)
}
