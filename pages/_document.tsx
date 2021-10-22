import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                <script src="../js/vendor/bootstrap.bundle.min.js"></script>
                <script src="../js/vendor/jquery-3.6.0.min.js"></script>
                <script src="../js/vendor/jquery-migrate-3.3.2.min.js"></script>
                <script src="../js/vendor/modernizr-3.11.2.min.js"></script>
                <script src="../js/plugins/jquery.countdown.min.js"></script>
                <script src="../js/plugins/swiper-bundle.min.js"></script>
                <script src="../js/plugins/scrollUp.js"></script>
                <script src="../js/plugins/venobox.min.js"></script>
                <script src="../js/plugins/jquery-ui.min.js"></script>
                <script src="../js/plugins/mailchimp-ajax.js"></script>
                <script src="../js/main.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument