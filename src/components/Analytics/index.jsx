import Script from "next/script"

const Analytics = () => {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-0EYV0GQLC6"
			/>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'GA_MEASUREMENT_ID');
				`}
			</Script>
		</>
	)
}

export default Analytics
