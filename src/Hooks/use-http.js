import { useCallback, useState } from "react";
import $ from "jquery";

const useHttp = () => {

  

    const sendRequest = useCallback(async (requestConfig, applyData) => {
       
       //console.log(requestConfig)
       // setIsLoading(true);
      //  setError(null);
        try {

            const response = await new Promise(function (resolve, reject) {
                $.ajax({
                    accept: requestConfig.accept ? requestConfig.accept : null,
                    contentType: requestConfig.contentType ? requestConfig.contentType : null,
                  method: requestConfig.method ? requestConfig.method : 'GET',
                  url: requestConfig.url,
                  data: requestConfig.data,
              }).done(resolve).fail(reject);
            });

           // console.log(response)

            if (!response && !response.status) {
                throw new Error('Request failed!');
            }
           // console.log(response.notes)

            applyData({ status: response.status, data: response.data });


        }
        catch (err) {
           console.error(err.responseJSON);
           //console.log(err.responseText)
           // setError(err.message);
        }
       // setIsLoading(false);
    }, []);

    return {

        sendRequest
    }

};

export default useHttp;