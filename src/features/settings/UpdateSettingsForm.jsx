import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isLoading, error, setting } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = setting;

  if (isLoading) return <Spinner />;

  function handleUpdate(field, e) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          defaultValue={minBookingLength}
          id="min-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate("minBookingLength", e)}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={maxBookingLength}
          id="max-nights"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate("maxBookingLength", e)}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          id="max-guests"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate("maxGuestsPerBooking", e)}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          id="breakfast-price"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate("breakfastPrice", e)}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
