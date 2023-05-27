import React from "react";
import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'

import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';

export default function Input1({ objValue, onChange, index }) {
  const { label, type, value } = objValue;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type || "text"}
        id={label}
        value={value || ""}
        onChange={(e) => onChange(e, index)}
      />
    </FormControl>
  );
}