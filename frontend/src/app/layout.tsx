import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfólio de Desenvolvimento Web | Inovação e Tecnologia",
	description: "Explore projetos inovadores de desenvolvimento web com tecnologias modernas.",
	keywords:
		"Desenvolvimento Web, DevOps, Cloud, Automação, GitOps, CI/CD, Kubernetes, Docker, Terraform, AWS, SRE, Engenharia de Software, Arquitetura de Software, Microsserviços, TypeScript, Next.js, React, Golang, Python, Machine Learning, MLOps, Ciência de Dados, Inteligência Artificial, Computação em Nuvem",
	authors: [{ name: "Matheus Vieira Nascimento Oliveira" }],
}

const fonte = Orbitron({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-orbitron",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased h-full`}>{children}</body>
		</html>
	)
}
