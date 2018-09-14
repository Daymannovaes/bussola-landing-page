import Link from 'next/link'

export default () => (
    <div>
        <style jsx>{`
            @media only screen and (max-width: 600px) and (min-width: 421px) {
                h1 {
                    font-size: 1.5em;
                }
            }

            @media only screen and (max-width: 420px) {
                h1 > span {
                    display: none;
                }
            }

            @media only screen and (max-width: 270px) {
                h1, h2 {
                    font-size: 1em;
                }
                h3 {
                    font-size: 0.7em;
                }
            }
        `}</style>

        <h1>Bussola<span>.school</span></h1>
        <h3>
            Escola de desenvolvimento pessoal
        </h3>
    </div>
);
