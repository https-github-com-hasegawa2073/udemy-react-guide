import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from '../Example';

describe('GetUserDataコンポーネントの動作確認', () => {
  test('外部データ取得中', async () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const h2El = await screen.findByRole('heading', { name: 'プロフィール' });
    expect(h2El).toBeInTheDocument();
  });
});
