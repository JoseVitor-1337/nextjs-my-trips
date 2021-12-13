import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					<link rel="shortcut icon" href="/images/icon-192x192.png" />
					<link rel="apple-touch-icon" href="/images/icon-512x512.png" />
					<link rel="manifest" href="/manifest.json" />

					<meta name="theme-color" content="#06092B" />
					<meta
						name="description"
						content="A simple project to work with React, NextJS and Jest"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
