import { Select } from '@geist-ui/core';
import { User } from "@geist-ui/icons";

interface NavigationInputProps {
    setPage: (page: string) => void
}

function NavigationInput({
    setPage
}: NavigationInputProps): JSX.Element {
    return (
      <div className="flex justify-center mt-12">
        <Select
          width={"250px"}
          initialValue="Bio"
          /* @ts-ignore */
          onChange={(value) => setPage(value)}
        >
          <Select.Option label>
            About Me
          </Select.Option>
          <Select.Option value="Bio">Bio</Select.Option>
          <Select.Option value="Resume">Resume</Select.Option>
          <Select.Option value="Contact">Contact</Select.Option>
          <Select.Option label>Skills</Select.Option>
          <Select.Option value="Frameworks">Frameworks</Select.Option>
          <Select.Option value="Languages">Languages</Select.Option>
          <Select.Option label>Projects</Select.Option>
          <Select.Option value="Black Panthers">
            Black Panther Narratives
          </Select.Option>
          <Select.Option value="History of Computing">
            History of Computing
          </Select.Option>
          <Select.Option value="Don't Panic">Don't Panic!</Select.Option>
          <Select.Option value="Three.js Snippets">
            {" "}
            Three.js Snippets{" "}
          </Select.Option>
        </Select>
      </div>
    );
}

export default NavigationInput
