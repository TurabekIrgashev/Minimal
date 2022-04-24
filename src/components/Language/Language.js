import { ClickAwayListener, List, ListItem, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../IconBtn/IconBtn";

const Language = () => {
  // const language = useSelector((state) => state.layout.language);
  const language = "english";
  const [open, setOpen] = useState(false);
  const dispatch = () => {};
  const langs = [
    {
      lang: "english",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAARVBMVEX////PFCsAJH3NABTtur4AAHAAHHoAAHMAIXwAEHfk5u65vdJBUJGDi7IAFnkAGHrOAB+wtc0AAGXiiI/4+PshNoXW2eWw7N6/AAAEi0lEQVR4nO2d7XLaMBRE1QJJHJI05Ov9H7WUdEaEEtaS9u410z2/OtPW2Mc+CdhCKgWym6afVDZHG1+vfgBW66N/vuHuyTTt8PHP4nFzw9yxpSi62TySBO25f7i94+3aMhTd3T7c8wzt2T7xaluEoulpSxX0B15tC1BEbaxCqy1dEb2xCqm2bEURjVUoteUqCmqswqgtU1FgY5Xtr9HaEhXFNlYZrS1NUXhjlcHakhRJGqsM1ZajSNVYZaC2DEXCxir9tekViRur9NYmV6RvrNJXm1hRSmOVrtqkitIaq3R8blMqymys0lybThGnMcLN29baVIo4je0KZTNttYkUURrbn/5CuhhbapMo4h1WIeqeW5tAEaexzzgKe4OLUEQ96eVzm9LaohWRD6aEiM9UREqifrgq7E3PqC1UEf9Ul6Otq2oLVBRxCOXLK2hqC1MUE0IJeZHLd0miFAWd4HL6OoLaYhSF7fg/igS1RSgKvPzPKAr/3RagKPK0nlMUXRtdUezunlcUe1rIiqIv+u8URcbNVRT+o/NbRYGXL1OR4BfwBUVhJ4inSPI27qKioMxpijQfBi4rirmQSYpUHymRoohTRVGkuzGBFfGDZygS3t6aoYh+SY8rkt4knaWIfNJGFUl+jzUroqY/qEj9wGauIubFPaRI/9hvviLe6RtRlPDwuEURq7YRRdrG2hWRans7+nOjorfTbbXTPJClURF9wE6jomE6Bh82KyIP+9Iq6hpU166IO3hQqqhvaGaPImZtQkW9XxXrU8SrTaaof5h4pyJabSpFA1826FZEqk2jaOgrK2UzwMv7xzUo+nh/GTnK0ZcfRf2+6AqxIogVQawIYkUQK4JYEcSKIFYEsSLINSha5/L6jBQ9vybvYlnlAg3tHSXvYsG7+L9jRRArglgRxIogVgSxIogVQawIYkUQK4JYEcSKIFYEsSKIFUGsCGJFECuCWBHEiiBWBLEiiBVBrAhiRRArglgRxIogVgSxIogVQTwEC+KBfJD0oZZXMBw0GSuCWBHEiiBWBLEiiBVBrAhiRRArglyDIk+IASfE8LQqcFqV3v/oyXkAnuIJ4YnCAJ5uDuBJCxGe+hLgCVQBnoYX4cmcAZ4SHOCJ5RFengDgRS4AXioF4QV3wN972SYv/jW4+JeXkAOKvBAhUOTlLJEiL4oKFHlpXaDICzQjRV7mGyjyYvFAkeSNRoyisMu/KF5EpCjoh+ixItWHnjBFMYdQFek+OgcqigihxG06RxH/x+lfRdLbeLGK6AdTiOLnPnqJVkROorA3uAhF1JNeEh5MCRQxaysJjzclinhxlB1lM00PyUWKSLURBLUPtVAp4g4W66djeJxOEX04VAddw76UisiD6trpGzwoVZRbW++Ab7GivNr6BzLLFSXVNjAcXq8oo7ahL1VkKFLX1t9YoiJpbQONZSrS1TbUWK4iTW2DjWUrEtQ22li6oujaer+udEKuosjaGI0dyFYUVhulsQPpimJqIzV2YAGK+LXRGjuwCEXk2niNHViGImZtu4nX2IGlKNrXNs24M/0bhl3ZxaieTuAAAAAASUVORK5CYII=",
    },
    {
      lang: "russian",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAGFBMVEX////VKx4AOab2+f0AN6UEOaPOKxwFPKiWjACKAAAA+UlEQVR4nO3QsQGDAAzAsFCg/P8xezyxSydoBgAAAAAAAAAAAAAAAAAAAOCjk20etrnY5sfmpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aTmZps/2xxsTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTmpFw4O1+wE1Ff8AAAAAElFTkSuQmCC",
    },
    {
      lang: "uzbek",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png",
    },
  ];

  function handleClick() {
    return setOpen((p) => !p);
  }

  console.log(open);

  return (
    <>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconBtn
            sx={{
              width: "45px",
              height: "45px",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={handleClick}
          >
            <Box
              component="img"
              sx={{ borderRadius: "5px", width: "100%" }}
              src={langs.filter((obj, i) => obj.lang == language)[0].flag}
              alt=""
            />
          </IconBtn>

          {open && (
            <Paper
              sx={{
                position: "absolute",
                top: 55,
                right: 5,
                borderRadius: "13px",
                p: 1,
                boxShadow:
                  "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                width: "180px",
                fontSize: "0.875rem",
                fontWeight: "400",
                fontFamily: "Public Sans, sans-serif",
              }}
            >
              {langs.map((obj, i) => (
                <ListItem
                  key={obj.title}
                  sx={{
                    bgcolor: language == obj.lang ? "#EDEFF1" : "transparent",
                    "&:hover": {
                      bgcolor: language == obj.lang ? "#EDEFF1" : "#F6F7F8",
                    },
                    borderRadius: "7px",
                    py: 0.9,
                    px: 1,
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    dispatch({
                      type: "SET_LANGUAGE",
                      payload: { data: obj.lang },
                    })
                  }
                >
                  <Box
                    sx={{
                      width: "34px",
                      borderRadius: "3px",
                      objectFit: "cover",
                      mr: 2,
                    }}
                    component="img"
                    src={obj.flag}
                  />
                  {obj.lang}
                </ListItem>
              ))}
            </Paper>
          )}
        </Box>
      </ClickAwayListener>
    </>
  );
};

export default Language;
