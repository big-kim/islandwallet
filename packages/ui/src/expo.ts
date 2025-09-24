export function usePretendardFont(): { loaded: boolean; fontFamily: string } {
  // Mobile clients currently fall back to the system font until native Pretendard assets are wired.
  return { loaded: true, fontFamily: "System" };
}
