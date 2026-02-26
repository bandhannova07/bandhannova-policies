import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'BandhanNova Policies',
        short_name: 'BN Policies',
        description: 'Terms of Service and Privacy Policy for BandhanNova ecosystem.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fafbfc',
        theme_color: '#4f46e5',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
