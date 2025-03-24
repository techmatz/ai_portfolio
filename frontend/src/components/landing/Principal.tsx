import Cabecalho from "../shared/Cabecalho"

export default function Principal() {
	return (
		<div className="flex w-full flex-col items-center justify-center h-[500px] bg-[url('/principal.png')] bg-cover bg-center">
			<Cabecalho />
			<div className="flex-1 flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="text-3xl sm:text-5xl font-bold text-center">
							Matheus Oliveira
						</span>
					</h1>
					<h2 className="text-center">Desenvolvedor de Software</h2>
				</div>
			</div>
		</div>
	)
}
