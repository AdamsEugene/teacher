import React from "react";
import {
  FlexboxGrid,
  Form,
  IconButton,
  Input,
  SelectPicker,
  Uploader,
} from "rsuite";
import { styled } from "styled-components";
import { AiFillAudio } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { Icon } from "@rsuite/icons";
import { IoIosExpand, IoIosContract } from "react-icons/io";

import ConditionalRender from "../ConditionalRender";
import Typography from "../Typography";
import TextEditor from "../TextEditor";
import CustomModal from "../CustomModal";

interface Props {
  openExpandModal: boolean;
  closeExpandModal: () => void;
  handleOpenExpandModal: () => void;
  textValue: string;
  setContentName: React.Dispatch<React.SetStateAction<string>>;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
}

const data = ["Image", "Video", "Audio", "Text", "Advance Text"].map(
  (item) => ({ label: item, value: item })
);

export default function SubjectExtraContent(props: Props) {
  const {
    closeExpandModal,
    openExpandModal,
    handleOpenExpandModal,
    setContentName,
    setTextValue,
    textValue,
  } = props;
  const [option, setOption] = React.useState<string | null>();

  const handleOptionChange = (value: string | null) => {
    setOption(value);
  };

  return (
    <>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={24}>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel>Content Name</Form.ControlLabel>
              <Form.Control
                name="name"
                type="text"
                onChange={(value: string) => setContentName(value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Content Type</Form.ControlLabel>
              <SelectPicker
                label="Content Type"
                data={data}
                block
                onChange={handleOptionChange}
              />
            </Form.Group>
            <ConditionalRender
              renderIf={option === "Text"}
              children={
                <Form.Group>
                  <Form.ControlLabel>Text</Form.ControlLabel>
                  <TextWrapper>
                    <Input
                      //   inputRef={bioRef}
                      as="textarea"
                      rows={5}
                      placeholder="Textarea"
                      name="biography"
                      defaultValue={textValue}
                      autoFocus
                      onChange={(value) => setTextValue(value)}
                    />
                    <ButtonWrapper>
                      <IconButton
                        icon={<Icon as={IoIosExpand} />}
                        circle
                        appearance="link"
                        title="Expand"
                        onClick={handleOpenExpandModal}
                      />
                    </ButtonWrapper>
                  </TextWrapper>
                </Form.Group>
              }
            />
            <ConditionalRender
              renderIf={option === "Image"}
              children={
                <Form.Group>
                  <Form.ControlLabel>Image</Form.ControlLabel>
                  <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    draggable
                    accept="video"
                    style={{ width: "100%" }}
                  >
                    <Wrapper>
                      <Icon style={{ fontSize: "8rem" }} as={BsImages} />
                      <Typography $color="active">
                        Click or Drag files to this area to upload
                      </Typography>
                    </Wrapper>
                  </Uploader>
                </Form.Group>
              }
            />
            <ConditionalRender
              renderIf={option === "Audio"}
              children={
                <Form.Group>
                  <Form.ControlLabel>Audio</Form.ControlLabel>
                  <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    draggable
                    accept="video"
                    style={{ width: "100%" }}
                  >
                    <Wrapper>
                      <Icon style={{ fontSize: "8rem" }} as={AiFillAudio} />
                      <Typography $color="active">
                        Click or Drag files to this area to upload
                      </Typography>
                    </Wrapper>
                  </Uploader>
                </Form.Group>
              }
            />
            <ConditionalRender
              renderIf={option === "Video"}
              children={
                <Form.Group>
                  <Form.ControlLabel>Video</Form.ControlLabel>
                  <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    draggable
                    accept="audio"
                    style={{ width: "100%" }}
                  >
                    <Wrapper>
                      <Icon style={{ fontSize: "8rem" }} as={TfiVideoClapper} />
                      <Typography $color="active">
                        Click or Drag files to this area to upload
                      </Typography>
                    </Wrapper>
                  </Uploader>
                </Form.Group>
              }
            />
            <ConditionalRender
              renderIf={option === "Advance Text"}
              children={
                <Form.Group>
                  <Form.ControlLabel>Advance Text</Form.ControlLabel>
                  <TextWrapper>
                    <TextEditor
                      onChange={(data) => setTextValue(data)}
                      data={textValue}
                    />
                    <ButtonWrapper>
                      <IconButton
                        icon={<Icon as={IoIosExpand} />}
                        circle
                        appearance="link"
                        title="Expand"
                        onClick={handleOpenExpandModal}
                      />
                    </ButtonWrapper>
                  </TextWrapper>
                </Form.Group>
              }
            />
          </Form>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <CustomModal
        open={openExpandModal}
        handleClose={closeExpandModal}
        onSave={closeExpandModal}
        size="full"
        backdrop="static"
        title={option === "Text" ? "Text" : "Advance Text"}
        children={
          <>
            <ConditionalRender
              renderIf={option === "Advance Text"}
              children={
                <TextWrapper>
                  <TextEditor
                    big
                    data={textValue}
                    onChange={(data) => setTextValue(data)}
                  />
                  <ButtonWrapper>
                    <IconButton
                      icon={<Icon as={IoIosContract} />}
                      circle
                      appearance="link"
                      title="Expand"
                      onClick={closeExpandModal}
                    />
                  </ButtonWrapper>
                </TextWrapper>
              }
            />
            <ConditionalRender
              renderIf={option === "Text"}
              children={
                <TextWrapper>
                  <Input
                    //   inputRef={bioRef}
                    as="textarea"
                    rows={30}
                    placeholder="Textarea"
                    name="biography"
                    defaultValue={textValue}
                    autoFocus
                    onChange={(value) => setTextValue(value)}
                  />
                  <ButtonWrapper>
                    <IconButton
                      icon={<Icon as={IoIosContract} />}
                      circle
                      appearance="link"
                      title="Expand"
                      onClick={closeExpandModal}
                    />
                  </ButtonWrapper>
                </TextWrapper>
              }
            />
          </>
        }
      />
    </>
  );
}

const Wrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
