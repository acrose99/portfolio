import { Card, Divider, useTheme, Text, Link } from "@geist-ui/core";
import { useEffect, useState } from "react";
import { getSongs } from "../pages/api/getSongs";

type song = {
  artist: string;
  url: string;
  file: string
  content?: string;
};

function Song({ artist, url, content, file }: song) {
  const theme = useTheme();
  return (
    <Card
    //   shadow
      hoverable
      style={{
        borderRadius: ".25rem",
        background: `linear-gradient(to top right, ${theme.palette.background}, ${theme.palette.accents_2} 80%)`,
      }}
    >
      <Card.Content>
        <Text b>Artist: {artist}</Text>
      </Card.Content>
      {/* @ts-ignore */}
      <Divider y={0} />
      <Card.Content>
        <Text h2 em>
          {file}
        </Text>
      </Card.Content>
      <Card.Footer>
        <Link icon color target="_blank" href={url}>
          Visit
        </Link>
      </Card.Footer>
    </Card>
  );
}

interface MusicProps {
  songs: song[];
}
function Music({ songs }: MusicProps) {
  return (
    <section className="flex flex-col items-center sm:my-2 mx-12 space-y-12">
      <Text h1>50 Songs that I grew up on:</Text>
      <div className="my-12 sm:w-6/12 space-y-12">
        {songs.map((song, index) => 
          <Song file={song.file} key={index} artist={song.artist} url={song.url} />
        )}
      </div>
    </section>
  );
}

export default Music;
