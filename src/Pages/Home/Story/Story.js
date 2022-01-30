import React from 'react';
import story from '../../../Images/story1.jpg'
import story2 from '../../../Images/story2.jpg'

const Story = () => {
    return (
        <>
            <div className="row mt-5 px-2" >
                <div className="col-md-6">
                    <img className='img-fluid ms-4' src={story} alt="" />
                </div>
                <div className="col-md-6 px-5 d-flex justify-content-center align-items-center">
                    <div>
                    <h2>Ｓｔｏｒｙ ２０１７</h2>
                    <p className='text-danger fst-italic'>&nbsp; &nbsp; New creations</p>
                    <p>Tᴏ ᴄᴇʟᴇʙʀᴀᴛᴇ ɪᴛꜱ ʀᴇᴛᴜʀɴ ᴛᴏ ᴛʜᴇ Sᴛᴏʀᴇ Iɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴅᴇ ʟᴀ Hᴀᴜᴛᴇ Hᴏʀʟᴏɢᴇʀɪᴇ ᴅᴇ Gᴇɴᴇᴠᴇ (SIHH), Gɪʀᴀʀᴅ-Pᴇʀʀᴇɢᴀᴜx ᴜɴᴠᴇɪʟꜱ ɴᴇᴡ ᴀɴᴅ ꜱᴛᴜɴɴɪɴɢ ᴄʀᴇᴀᴛɪᴏɴꜱ, ʜᴇɪʀꜱ ᴏғ ᴛʜᴇ ɪᴄᴏɴꜱ ᴏɴ ᴡʜɪᴄʜ ᴛʜᴇ Mᴀɴᴜғᴀᴄᴛᴜʀᴇ ʜᴀꜱ ʙᴜɪʟᴛ ɪᴛꜱ ʀᴇᴘᴜᴛᴀᴛɪᴏɴ ᴏᴠᴇʀ ᴛʜᴇ ᴄᴇɴᴛᴜʀɪᴇꜱ.
                    </p>
                    </div>
                </div>
            </div>
            <div className="row gap-0 px-2" >
                
                <div className="col-md-6 px-5 d-flex justify-content-center align-items-center">
                    <div>
                    <h2>Ｗｈｙ Ｃｈｏｏｓｅ ｕｓ ?</h2>
                    <p className='text-danger fst-italic'>&nbsp; &nbsp; Men's Suits</p>
                    <p>Iғ ʏᴏᴜ ᴀʀᴇ ʟᴏᴏᴋɪɴɢ ғᴏʀ ϙᴜɪɴᴛᴇꜱꜱᴇɴᴛɪᴀʟ, ʀᴇᴀꜱᴏɴᴀʙʟʏ-ᴘʀɪᴄᴇᴅ Mᴀʀᴄ Dᴀʀᴄʏ ᴡᴇᴅᴅɪɴɢ ꜱᴜɪᴛꜱ, ᴡᴇ ᴀʀᴇ ʏᴏᴜʀ ʙᴇꜱᴛ ᴏᴘᴛɪᴏɴ. Mᴀʀᴄ Dᴀʀᴄʏ ɪꜱ ᴛʜᴇ ᴜʟᴛɪᴍᴀᴛᴇ ʀᴇᴘʀᴇꜱᴇɴᴛᴀᴛɪᴏɴ ᴏғ ꜱᴏᴘʜɪꜱᴛɪᴄᴀᴛɪᴏɴ. Yᴏᴜ ᴄᴀɴ ғɪɴᴅ ᴍᴏᴅᴇʀɴ ᴀɴᴅ ғᴀꜱʜɪᴏɴᴀʙʟᴇ ꜱᴜɪᴛꜱ ᴛᴏ ᴍᴇᴇᴛ ʏᴏᴜʀ ᴘʀᴇғᴇʀᴇɴᴄᴇꜱ.
                    </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={story2} alt="" />
                </div>
            </div>
        </>
    );
};

export default Story;