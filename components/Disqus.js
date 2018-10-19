import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import PropTypes from 'prop-types';

import { DISQUS_SHORTNAME, SITE_URL } from '../config/globals';

const Disqus = ({ id, title }) => (
    <div>
        <h4>Comentários</h4>

        <DiscussionEmbed
            shortname={DISQUS_SHORTNAME}
            config={{
                title,
                identifier: id,
                url: `${SITE_URL}/${id}`,
            }}
        />
    </div>
);

Disqus.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Disqus;
