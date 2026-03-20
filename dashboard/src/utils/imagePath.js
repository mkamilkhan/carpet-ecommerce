export const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://via.placeholder.com/150';
    if (imagePath.startsWith('http')) return imagePath;

    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // Clean up slashes to avoid double slashes
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

    return `${cleanBaseUrl}${cleanImagePath}`;
};
