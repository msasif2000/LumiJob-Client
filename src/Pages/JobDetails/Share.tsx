
import { FacebookIcon, FacebookShareButton, FacebookShareCount, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from "react-share";

const Share = ({ shareUrl, title }: { id: string, shareUrl: string, title: string | undefined })=> {

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-10">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="flex gap-3">
                    <FacebookShareButton url={shareUrl} className="Demo__some-network__share-button">
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <div>
                        <FacebookShareCount url={shareUrl} title={title} className="Demo__some-network__share-count">
                            {count => count}
                        </FacebookShareCount>
                    </div>

                    <div className="Demo__some-network">
                        <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                            <XIcon size={32} round />
                        </TwitterShareButton>
                    </div>

                    <div className="Demo__some-network">
                        <TelegramShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                    </div>

                    <div className="Demo__some-network">
                        <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            separator=":: "
                            className="Demo__some-network__share-button"
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </div>

                    <div className="Demo__some-network">
                        <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                    </div>
                </div>


            </div>
        </dialog>
    );
};

export default Share;
