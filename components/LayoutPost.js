import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import LayoutMain from './LayoutMain';
import Disqus from './Disqus';

import {
    colors, PADDING_UNIT, POST_SECTION_PADDING, POST_WIDTH, POST_ASSET_WIDTH,
} from '../config/style-guide';

import { SITE_URL } from '../config/globals';

const LayoutPost = ({
    children,
    title,
    image,
    date,
    id,
}) => (
    <LayoutMain>
        <section>
            <Head>
                <title>{title} - Bussola.school</title>

                <meta property="fb:app_id" content="1968620513446457" />
                <meta property="og:url" content={`${SITE_URL}/${id}`} />
                <meta property="og:title" content={`${title} - Bussola.school`} />
                <meta property="og:description" content={`${title} - Bussola.school`} />
                <meta property="og:site_name" content="Bussola.school" />
                <meta property="og:image" content={`${SITE_URL}/static/${image}`} />

                <meta property="og:type" content="article" />
                <meta property="article:author" content="Dayman Novaes" />
                <meta property="article:published_time" content={date} />
            </Head>

            <style jsx>
                {`
                :global(main) {
                    background: ${colors.lightwhite} !important;
                }

                section {
                    color: ${colors.lightblack};
                    text-align: left;
                    line-height: 1.6;
                    letter-spacing: -.004em;

                    margin: 0 auto;
                    padding-left: ${POST_SECTION_PADDING}px
                    padding-right: ${POST_SECTION_PADDING}px;

                    font-size: 0.9em;
                }

                article :global(> *) {
                    max-width: ${POST_WIDTH}px;
                    margin-left: auto;
                    margin-right: auto;
                }

                section :global(ul.LayoutPost-clear) {
                    list-style: none;
                }

                section :global(p) {
                    margin-top: ${6 * PADDING_UNIT}px;
                    margin-bottom: 0;
                }

                section article h1 {
                    font-size: 1.5em;
                }

                section :global(h1), section :global(h2), section :global(h3), section :global(h4) {
                    text-shadow: initial;
                    text-transform: initial;
                    max-width: ${POST_ASSET_WIDTH}px !important;
                    font-weight: 900;
                    margin-top: ${6 * PADDING_UNIT}px;
                }

                section :global(h3), section :global(h4) {
                    padding: ${2 * PADDING_UNIT}px ${4 * PADDING_UNIT}px;
                    border-bottom: 4px dotted #00000020;
                    transition: 200ms all;
                }

                section acticle :global(h3), section article :global(h4) {
                    margin-bottom: -${3 * PADDING_UNIT}px;
                }

                section :global(h3:hover), section :global(h4:hover) {
                    border-bottom: 4px dotted #00000050;
                }

                date {
                    font-size: 0.9em;
                    color: ${colors.lightblue};
                }
            `}
            </style>

            <article>
                <h1>{title}</h1>

                <date>{(new Date(date)).toDateString()}</date>

                {children}
            </article>

            <Disqus id={id} title={title} />
        </section>
    </LayoutMain>
);

LayoutPost.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
};

LayoutPost.defaultProps = {
    image: 'logo.png',
};

export default LayoutPost;
