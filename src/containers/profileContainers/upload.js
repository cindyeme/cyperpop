import React, { useState } from 'react';
import 'react-upload-gallery/dist/style.css';
import RUG, { DragArea, DropArea } from 'react-upload-gallery';
import tw from 'twin.macro';
import avatar from 'assets/svg/avatar.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';
import { ReactComponent as CameraIcon } from 'feather-icons/dist/icons/camera.svg';

import { In, ModalPic } from 'constants/styles/joint';
import swal from 'sweetalert';

const Container = tw.div`relative sm:mx-8 mx-2 w-2/4 h-2/4 bg-black rounded w-full  flex flex-col items-center justify-center     justify-items-center`;
const Image = tw.img`h-32 w-32 rounded`;
const Div = tw.div`grid py-4 justify-items-center items-center`;
const UploadButton = tw.button` mt-4 py-3  px-6 bg-white text-base text-black rounded-full font-bold  shadow-lg capitalize text-xs transition duration-300 transform focus:outline-none focus:outline-none hover:bg-white hover:text-black `;
export const UploadBtn = tw.button`bg-white text-gray-700  p-2  font-semibold sm:text-sm text-xs rounded  text-center  hover:bg-gray-900 hover:text-white`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-2 mr-2 text-white hover:text-red-500 font-bold focus:text-red-500`;

const limit = 1;

const AvatarUpload = ({ setImage }) => (
  <RUG
    onChange={(images) => {
      setImage(images[0]);
    }}
    header={false}
    rules={{ limit }}
    accept={['jpg', 'jpeg', 'png']}
  >
    {(images, { openDialogue }) => {
      const { length } = images;

      return (
        <DropArea>
          {(isDrag) => (
            <div style={{ position: 'relative' }}>
              <In>
                <UploadBtn onClick={openDialogue}>
                  <CameraIcon tw="w-6 h-6 hover:text-white text-gray-800" />
                </UploadBtn>
              </In>

              {length ? (
                <DragArea>
                  {(image) => (
                    <div onClick={openDialogue}>
                      <Image src={image.source} alt="image" />
                    </div>
                  )}
                </DragArea>
              ) : (
                <Div>
                  <Image src={avatar} alt="image" />
                </Div>
              )}
            </div>
          )}
        </DropArea>
      );
    }}
  </RUG>
);

const CoverUpload = ({ setImage }) => (
  <RUG
    onChange={(images) => {
      setImage(images[0]);
    }}
    header={false}
    rules={{ limit }}
    accept={['jpg', 'jpeg', 'png']}
  >
    {(images, { openDialogue }) => {
      const { length } = images;

      return (
        <DropArea>
          {(isDrag) => (
            <div style={{ position: 'relative' }}>
              <In>
                <UploadBtn onClick={openDialogue}>
                  <CameraIcon tw="w-6 h-6 hover:text-white text-gray-800" />
                </UploadBtn>
              </In>
              {length ? (
                <DragArea>
                  {(image) => (
                    <Div>
                      <Image src={image.source} alt="image" />
                    </Div>
                  )}
                </DragArea>
              ) : (
                <Div>
                  <Image src={avatar} alt="image" />
                </Div>
              )}
            </div>
          )}
        </DropArea>
      );
    }}
  </RUG>
);

export const UploadProfile = ({ setImage, image, address, editAccountPic, setModalIsOpenPic }) => {
  let formData = new FormData();

  formData.append('profile_photo', image?.file);

  formData.append('address', address);
  console.log(formData);
  return (
    <Container>
      <CloseModalButton onClick={() => setModalIsOpenPic(false)}>
        <CloseIcon />
      </CloseModalButton>

      <Div>
        <AvatarUpload setImage={setImage} />
      </Div>
      {image ? (
        <UploadButton
          onClick={async () => {
            await editAccountPic(formData);
            // setOpen(true)
            setModalIsOpenPic(false);
            swal({
              title: 'Success!',
              text: 'Profile image was updated successfully!',
              icon: 'success',
              button: 'Contiune',
            });
          }}
        >
          Upload
        </UploadButton>
      ) : (
        ''
      )}
    </Container>
  );
};

export const UploadCover = ({ setImage, image, address, editAccountPic, setModalIsOpenCover }) => {
  let formData = new FormData();

  formData.append('cover_photo', image?.file);

  formData.append('address', address);

  return (
    <Container>
      <CloseModalButton onClick={() => setModalIsOpenCover(false)}>
        <CloseIcon />
      </CloseModalButton>
      <Div>
        <CoverUpload setImage={setImage} />
      </Div>
      {image ? (
        <UploadButton
          onClick={async () => {
            await editAccountPic(formData);

            setModalIsOpenCover(false);
            swal({
              title: 'Success!',
              text: 'Cover image was updated successfully!',
              icon: 'success',
              button: 'Contiune',
            });
          }}
        >
          Upload
        </UploadButton>
      ) : (
        ''
      )}
    </Container>
  );
};
