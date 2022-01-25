// imports needed for this function
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';

export const pinFileToIPFS = (filePath: string) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  // we gather a local file for this example, but any valid readStream source will work here.
  let data = new FormData();

  data.append('file', fs.createReadStream(`${filePath}`));

  // You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  // metadata is optional
  const metadata = JSON.stringify({
    name: 'testname',
    keyvalues: {
      exampleKey: 'exampleValue',
    },
  });
  data.append('pinataMetadata', metadata);

  // pinataOptions are optional
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPinPolicy: {
      regions: [
        {
          id: 'FRA1',
          desiredReplicationCount: 1,
        },
        {
          id: 'NYC1',
          desiredReplicationCount: 2,
        },
      ],
    },
  });
  data.append('pinataOptions', pinataOptions);

  return axios
    .post(url, data, {
      // maxBodyLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
      headers: {
        'Content-Type': `multipart/form-data;`,
        pinata_api_key: process.env.pinata_api_key,
        pinata_secret_api_key: process.env.pinata_secret_api_key,
      },
    })
    .then((response) => {
      // handle response here
      console.log(`response pinata api >> ${response}`);
    })
    .catch((error) => {
      // handle error here
      console.log(`error pinata api >> ${error}`);
    });
};