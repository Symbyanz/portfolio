import SocialItem from './SocialItem';
import styles from './SocialMedia.module.css';

const SocialMedia = () => {
    const socialItems = [
        {
            platform: 'GitHub',
            url: 'https://github.com/symbyanz',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        },
        {
            platform: 'Telegram',
            url: 'https://t.me/symbyanz',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" /></svg>
        },
        {
            platform: 'Whatsapp',
            url: 'https://wa.me/79523528495',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
        },
        {
            platform: 'VKontakte',
            url: 'https://vk.com/symbyanz',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true"><path d="M15.9207 0H0.0791016V15.8416H15.9207V0Z" fill="none" /><path fillRule="evenodd" clipRule="evenodd" d="M1.19268 1.11357C0.0791016 2.22715 0.0791016 4.01942 0.0791016 7.60396V8.23762C0.0791016 11.8222 0.0791016 13.6144 1.19268 14.728C2.30625 15.8416 4.09852 15.8416 7.68306 15.8416H8.31673C11.9013 15.8416 13.6935 15.8416 14.8071 14.728C15.9207 13.6144 15.9207 11.8222 15.9207 8.23762V7.60396C15.9207 4.01942 15.9207 2.22715 14.8071 1.11357C13.6935 0 11.9013 0 8.31673 0H7.68306C4.09852 0 2.30625 0 1.19268 1.11357ZM2.7524 4.81852C2.8382 8.93733 4.89759 11.4126 8.50816 11.4126H8.71281V9.05613C10.0395 9.18813 11.0428 10.1584 11.4454 11.4126H13.3201C12.8052 9.53798 11.452 8.50167 10.6071 8.10563C11.452 7.61719 12.6401 6.42907 12.9239 4.81852H11.2209C10.8513 6.12545 9.75571 7.31355 8.71281 7.42576V4.81852H7.00978V9.38615C5.95368 9.12214 4.62038 7.84162 4.56097 4.81852H2.7524Z" fill="currentColor" /></svg>

        },
    ];

    return (
        <ul className={styles.list}>
            {socialItems.map((item) => (
                <SocialItem key={item.platform} platform={item.platform} url={item.url} icon={item.icon} />
            ))}
        </ul>
    );
};

export default SocialMedia;
