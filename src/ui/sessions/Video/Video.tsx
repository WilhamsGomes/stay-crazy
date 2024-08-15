
export function SessionVideo() {
  return (
    <video width="320" height="240" controls preload="none">
       <source src="@/assets/baile.mp4" type="video/mp4" />
        <source src="@/assets/baile.mp4" type="video/ogg" />
        Your browser does not support the video tag.
    </video>
  );
}
